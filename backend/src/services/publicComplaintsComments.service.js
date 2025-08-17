const publicComplaintsCommentsRepo = require("../repositories/publicComplaintsComments.repository");

class publicComplaintsCommentsService {

    async getAllCommentsOfComplaint(id){
        return await publicComplaintsCommentsRepo.findByColumn('publicComplaintId',id);
    }

    async getCommentById(id){
        return await publicComplaintsCommentsRepo.findById(id);
    }

    async addNewComment(commentsDetails)
    {
        return await publicComplaintsCommentsRepo.create(commentsDetails);
    }

    async like(id)
    {
        return await publicComplaintsCommentsRepo.incrementValue("likes",id);
    }
    
    async dislike(id)
    {
        return await publicComplaintsCommentsRepo.incrementValue("dislikes",id);
    }

    async deleteComment(id)
    {
        return await publicComplaintsCommentsRepo.delete(id);
    }

    async updateComment(id,commentsDetails)
    {
        return await publicComplaintsCommentsRepo.update(id,commentsDetails);
    }
}

module.exports = new publicComplaintsCommentsService();