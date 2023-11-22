from flask import Flask, request, jsonify
import pickle
from PyPDF2 import PdfReader
import json
import re
import string
import random
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Fungsi untuk membaca konten dari file PDF
def read_pdf(file_path):
    pdf = PdfReader(file_path)
    text = ''
    for page in pdf.pages:
        text += page.extract_text()
    return text

# Fungsi untuk membersihkan teks
def cleanResume(txt):
    cleanText = re.sub('http\S+\s', ' ', txt)
    cleanText = re.sub('RT|cc', ' ', cleanText)
    cleanText = re.sub('#\S+\s', ' ', cleanText)
    cleanText = re.sub('@\S+', '  ', cleanText)  
    cleanText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', cleanText)
    cleanText = re.sub(r'[^\x00-\x7f]', ' ', cleanText) 
    cleanText = re.sub('\s+', ' ', cleanText)
    return cleanText

# Endpoint GET untuk membaca dan mengembalikan data dari file PDF
@app.route('/get_data', methods=['GET'])
def get_pdf_data():
    file_path = 'mycv.pdf' 
    pdf_content = read_pdf(file_path)
    response_data = {'pdf_content': pdf_content}

    return jsonify(response_data)

with open('model/catagory/clf.pkl', 'rb') as clf_file:
    clf = pickle.load(clf_file)


with open('model/catagory/tfidf.pkl', 'rb') as tfidf_file:
    tfidf = pickle.load(tfidf_file)

category_mapping = {
    15: "Java Developer",
    23: "Testing",
    8: "DevOps Engineer",
    20: "Python Developer",
    24: "Web Designing",
    12: "HR",
    13: "Hadoop",
    3: "Blockchain",
    10: "ETL Developer",
    18: "Operations Manager",
    6: "Data Science",
    22: "Sales",
    16: "Mechanical Engineer",
    1: "Arts",
    7: "Database",
    11: "Electrical Engineering",
    14: "Health and fitness",
    19: "PMO",
    4: "Business Analyst",
    9: "DotNet Developer",
    2: "Automation Testing",
    17: "Network Security Engineer",
    21: "SAP Developer",
    5: "Civil Engineer",
    0: "Advocate",
}
# endpoint POST untuk melakukan prediksi category
@app.route('/predict_category', methods=['POST'])
def predict_category():
    data = request.files['file']
    pdf = PdfReader(data)
    
    resume_text = ''
    for page in pdf.pages:
        resume_text += page.extract_text()

    cleaned_resume = cleanResume(resume_text)

    input_features = tfidf.transform([cleaned_resume])

    prediction_id = clf.predict(input_features)[0]
    category_name = category_mapping.get(prediction_id, "Unknown")

    return jsonify({'predicted_category': category_name})


with open('model/score/tfidf_vectorizer.pkl', 'rb') as tfidf_file:
    tfidf = pickle.load(tfidf_file)

with open('model/score/regressor_model.pkl', 'rb') as regressor_file:
    regressor = pickle.load(regressor_file)

# endpoint POST untuk melakukan prediksi score
@app.route('/predict_score', methods=['POST'])
def predict():
    data = request.files['file']
    pdf = PdfReader(data)
    
    score_text = ''
    for page in pdf.pages:
        score_text += page.extract_text()

        cleaned_cv_text = cleanResume(score_text)
        cv_tfidf = tfidf.transform([cleaned_cv_text])
        prediction_cv = regressor.predict(cv_tfidf)

        max_possible_score = 20
        predicted_percentage = (prediction_cv / max_possible_score) * 100
        predicted_percentage = int(predicted_percentage)

        return jsonify({'predicted_percentage': predicted_percentage})
    

    # Load tokenizer, label encoder, input shape, and model
with open('model/minQ/tokenizers.pkl', 'rb') as tokenizers_file:
    tokenizer = pickle.load(tokenizers_file)

with open('model/minQ/le.pkl', 'rb') as labelencoder_file:
    le = pickle.load(labelencoder_file)

with open('model/minQ/input_shape.pkl', 'rb') as inputshape_file:
    input_shape = pickle.load(inputshape_file)

model = load_model('model/minQ/chat_model.h5')

with open('dataset/Screning_CV.json') as content:
    data1 = json.load(content)

responses = {}
for intent in data1['intents']:
    responses[intent['tag']] = intent['responses']

# endpoimd chatbot minQ
@app.route('/minQ', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data['user_input']

    texts_p = []
    prediction_input = [letters.lower() for letters in user_input if letters not in string.punctuation]
    prediction_input = ''.join(prediction_input)
    texts_p.append(prediction_input)

    prediction_input = tokenizer.texts_to_sequences(texts_p)
    prediction_input = np.array(prediction_input).reshape(-1)
    prediction_input = pad_sequences([prediction_input], input_shape)

    output = model.predict(prediction_input)
    output = output.argmax()

    response_tag = le.inverse_transform([output])[0]
    response = random.choice(responses.get(response_tag, ["Maaf, minQ tidak mengerti itu."]))

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
