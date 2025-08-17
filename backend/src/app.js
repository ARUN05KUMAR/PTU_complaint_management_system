const express = require("express");
const bodyParser=require("body-parser");
const cors = require('cors');
const sequelize = require("./config/db.config");

const Students=require("./models/students.model")
const Professors=require("./models/professors.model")
const Admins=require("./models/admins.model")
const SupportingStaffs=require("./models/supportingStaffs.model")
const PublicComplaints=require("./models/publicComplaints.model")
const PublicComplaintsComments=require("./models/publicComplaintsComments.model")
const PrivateComplaints=require("./models/privateComplaints.model")
const PrivateComplaintsComments=require("./models/privateComplaintsComments")


const studentRoutes=require("./routes/students.routes");
const professorRoutes=require("./routes/professors.routes");
const supportingStaffRoutes=require("./routes/supportingStaffs.routes");
const adminRoutes=require("./routes/admins.routes");
const publicComplaintsRoutes=require("./routes/publicComplaints.routes");
const publicComplaintsCommentsRoutes=require("./routes/publicComplaintsComments.routes");
const privateComplaintsRoutes=require("./routes/privateComplaints.routes");
const privateComplaintsCommentsRoutes=require("./routes/privateComplaintsComments.routes");



const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use("/api",studentRoutes);
app.use("/api",professorRoutes);
app.use("/api",supportingStaffRoutes);
app.use("/api",adminRoutes);
app.use("/api",publicComplaintsRoutes);
app.use("/api",publicComplaintsCommentsRoutes);
app.use("/api",privateComplaintsRoutes);
app.use("/api",privateComplaintsCommentsRoutes);



PublicComplaints.hasMany(PublicComplaintsComments);
PrivateComplaints.hasMany(PrivateComplaintsComments);

Students.hasMany(PublicComplaints, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'student' } });
Professors.hasMany(PublicComplaints, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'professor' } });
SupportingStaffs.hasMany(PublicComplaints, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'supportingStaff' } });

PublicComplaints.belongsTo(Students, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'student' } });
PublicComplaints.belongsTo(Professors, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'professor' } });
PublicComplaints.belongsTo(SupportingStaffs, { foreignKey: 'issuerId', constraints: false, scope: { issuedBy: 'supportingStaff' } });

sequelize.sync({force:false}).then(() => {
  console.log("Database synced");
});

module.exports = app;
