const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://shopan-api-production.up.railway.app/api';

export const bannerApi = {
    
    async getAllImages() {
        const response = await fetch(`${API_URL}/banner`);
        if (!response.ok) throw new Error('Failed to fetch images');
        return response.json();
    },
};


