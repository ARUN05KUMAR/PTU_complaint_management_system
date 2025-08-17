const privateComplaintsCommentsRepo = require("../repositories/privateComplaintsComments.repository");

class privateComplaintsCommentsService {

    async getAllCommentsOfComplaint(id){
        return await privateComplaintsCommentsRepo.findByColumn('publicComplaintId',id);
    }

    async getCommentById(id){
        return await privateComplaintsCommentsRepo.findById(id);
    }

    async addNewComment(commentsDetails)
    {
        return await privateComplaintsCommentsRepo.create(commentsDetails);
    }

    async like(id)
        {
            return await privateComplaintsCommentsRepo.incrementValue("likes",id);
        }
        
    async dislike(id)
        {
            return await privateComplaintsCommentsRepo.incrementValue("dislikes",id);
        }

    async deleteComment(id)
    {
        return await privateComplaintsCommentsRepo.delete(id);
    }

    async updateComment(id,commentsDetails)
    {
        return await privateComplaintsCommentsRepo.update(id,commentsDetails);
    }
}

module.exports = new privateComplaintsCommentsService();