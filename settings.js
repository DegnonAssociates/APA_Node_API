// settings.js

exports.dbConfig = {
	user:     "apa2006admin",
	password: "apa2006adminpwd",
	server:   "degnonsql2",
	database: "APA2006",
	port: 1433
};

exports.webPort = 3001;
exports.httpMsgsFormat = "JSON";

exports.memberSql = "SELECT m.[Member ID] as memberId, m.First_Name as firstName, m.Last_Name as lastName, m.middle_name as middleName, m.degrees as degree, m.title as academicTitle, m.dept as department, m.org as institution, m.bus_phone as busPhone, m.email, m.address, m.address_2 as address2, m.city, m.state, m.zip, m.country, m.fax as fax, t.description as memberType, m.dues_year as duesYear FROM Main m INNER JOIN [Member Types] t ON m.membertype = t.memtype ";
exports.activitySql = "SELECT a.[Member ID] as memberId, a.positionCode, a.actOptOut, a.memYear, a.chairman, a.mentor, a.termExp, a.activityNote, m.First_Name	as firstName, m.Last_Name as lastName, m.degrees, m.email FROM Activities a INNER JOIN Main m ON a.[Member ID] = m.[Member ID]";
exports.activityCodeSql = "SELECT * FROM [Activity Codes] ";
exports.defaultSearchLimit = 25;

exports.secret = "69CDB52D-F11B-432B-835A-4E46FCF311BE";