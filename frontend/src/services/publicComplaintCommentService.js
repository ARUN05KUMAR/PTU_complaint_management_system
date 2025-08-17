import axios from 'axios'

const PUBLIC_COMPLAINT_COMMENT_API_URL = "http://localhost:5000/api/publicComplaintsComments";

class PublicComplaintComment {
    async getAllCommentsOfPublicComplaint(ComplaintId){
        const response = await axios.get(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/all/${ComplaintId}`);
        return response.data;
    }

    async getCommentById(ComplaintId){
        const response = await axios.get(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/${ComplaintId}`);
        return response.data;
    }




    async likePublicComplaintComment(id){
        const response = await axios.put(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/like/${id}`);
        return response.data;
    }

    async dislikePublicComplaintComment(id){
        const response = await axios.put(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/dislike/${id}`);
        return response.data;
    }



    async addPublicComplaintComment(details){
        const response = await axios.post(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/`,details);
        return response.data;
    }

    async updatePublicComplaintComment(id,details){
        const response = await axios.put(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deletePublicComplaintComment(id){
        const response = await axios.delete(`${PUBLIC_COMPLAINT_COMMENT_API_URL}/${id}`);
        return response.data;
    }
}

module.exports=new PublicComplaintComment;