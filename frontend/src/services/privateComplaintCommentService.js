import axios from 'axios'

const PRIVATE_COMPLAINT_COMMENT_API_URL = "http://localhost:5000/api/privateComplaintsComments";

class PrivateComplaintComment {
    async getAllCommentsOfPrivateComplaint(ComplaintId){
        const response = await axios.get(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/all/${ComplaintId}`);
        return response.data;
    }

    async getCommentById(ComplaintId){
        const response = await axios.get(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/${ComplaintId}`);
        return response.data;
    }




    async likePrivateComplaintComment(id){
        const response = await axios.put(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/like/${id}`);
        return response.data;
    }

    async dislikePrivateComplaintComment(id){
        const response = await axios.put(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/dislike/${id}`);
        return response.data;
    }



    async addPrivateComplaintComment(details){
        const response = await axios.post(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/`,details);
        return response.data;
    }

    async updatePrivateComplaintComment(id,details){
        const response = await axios.put(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deletePrivateComplaintComment(id){
        const response = await axios.delete(`${PRIVATE_COMPLAINT_COMMENT_API_URL}/${id}`);
        return response.data;
    }
}

module.exports=new PrivateComplaintComment;