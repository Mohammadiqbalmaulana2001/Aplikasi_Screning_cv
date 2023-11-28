import axio from 'axios'

const BaseApi = axio.create({
    baseURL: 'http://127.0.0.1:5000',
})

// endpoint score cv
export const predictScore = async (file) =>{
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await BaseApi.post('/predict_score',formData)
        if (response.status === 200) {
            return response.data.predicted_percentage;
            } else {
            throw new Error('Gagal mendapatkan prediksi');
            }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null;
    }
}


// enpoint category cv
export const predictCategory = async(file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await BaseApi.post('/predict_category', formData)
        if (response.status === 200) {
            return response.data.predicted_category;
        } else {
            throw new Error('Gagal mendapatkan prediksi kategori');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 'Unknown';
    }
}

// endpoint minQ
export const predictMinQ = async (userInput) => {
    try {
        const response = await BaseApi.post('/minQ',{
            user_input: userInput
        })
        if (response.status === 200) {
            return response.data.response;
        } else {
            throw new Error('Gagal mendapatkan respons dari server');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return "Maaf, terjadi kesalahan dalam mengirim permintaan.";
    }
}