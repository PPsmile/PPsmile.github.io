let ipBtn = document.getElementById("ip");
let message = document.getElementById("message");
let webBtn = document.getElementById("web");
let pplBtn = document.getElementById("ppl");
let cloudBtn = document.getElementById("cloud");
let aidBtn = document.getElementById("aid");
let thaimusicBtn = document.getElementById("thaimusic");


ipBtn.addEventListener('click', ()=>{
    message.innerHTML = "01418341 ชื่อวิชา ทรัพย์สินทางปัญญาสำหรับดิจตอลคอนเทนต์ Intellectual Property for Digital Content เรียนทุกวันพุธและศุกร์เวลา 8:00-9:30 สอนโดย อ.นวลวรรณ <br>ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ 3 หน่วยกิต"
});
webBtn.addEventListener('click', ()=>{
    message.innerHTML = "01418442 Web Technology and Services เรียนทุกวันอังคารเวลา 10:00-12:00 และ 14:30-16:30 สอนโดย อ.สุขุมาลและอ.ศรชัย <br>ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ 3 หน่วยกิต "
});
pplBtn.addEventListener('click', ()=>{
    message.innerHTML = "01418216 ชื่อวิชา หลักภาษาโปรแกรม Principles of Programming Languages เรียนทุกวันพุธและศุกร์เวลา 9:30-11:00 สอนโดย อ.อุมาพร <br>ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ 3 หน่วยกิต"
});
cloudBtn.addEventListener('click', ()=>{
    message.innerHTML = "01418354 ชื่อวิชา แนวคิดและการคำนวณแบบคลาวด์ Cloud Computing Concepts and Services เรียนทุกวันพุธเวลา 11:30-14:30 สอนโดย อ.เทพฤทธิ์ <br>ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ 3 หน่วยกิต"
});
aidBtn.addEventListener('click', ()=>{
    message.innerHTML = "01173151 ชื่อวิชา เอดส์ศึกษา AIDS Education เรียนทุกวันศุกร์เวลา 14:30-16:30 สอนโดย อ.ธริสรา จิรถเสถียรพร <br>ภาควิชาพลศึกษา คณะศึกษาศาสตร์ 2 หน่วยกิต"
});
thaimusicBtn.addEventListener('click', ()=>{
    message.innerHTML = "01385261 ชื่อวิชา ดนตรีพื้นเมืองไทย ภาคเหนือ Northern Thai Folk Music เรียนทุกวันเสาร์เวลา 16:30-19:30 สอนโดย อ.พจี <br>ภาควิชาดนตรี คณะมนุษยศาสตร์ 3 หน่วยกิต"
});
