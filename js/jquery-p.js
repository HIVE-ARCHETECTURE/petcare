function VladimirPutin(){
document.getElementById('contactus').innerHTML = "<center><img src='http://3.bp.blogspot.com/-7dSqHX-zYJM/Uv0jwQwdFDI/AAAAAAAAAvE/kzOD9LT58_o/s1600/Vladimir_Putin_Bio.png'></p></center>";
document.getElementById('contactus2').innerHTML = "<center><button class='submit' onclick='EnterPutinville()'>Enter Putinville</button></center>";
document.getElementById('contactus3').innerHTML = "";
document.getElementById('logo').innerHTML = "<a href='index.html'><img src='https://dl.dropboxusercontent.com/u/89017432/hivepetcare2.png'/></a>";
}

function BobMarley(){
document.getElementById('contactus').innerHTML = "<center><img src='http://www.pixeljoint.com/files/icons/full/pjpa6924.gif'></p></center>";
document.getElementById('contactus2').innerHTML = "<center><button class='submit' onclick='EnterMarleyville()'>Enter Marleyville</button></center>";
document.getElementById('contactus3').innerHTML = "";
document.getElementById('logo').innerHTML = "<a href='index.html'><img src='https://dl.dropboxusercontent.com/u/89017432/hivepetcare2.png'/></a>";
}

function SendEmail(){
document.getElementById('contactus').innerHTML = "<center><img src='https://dl.dropboxusercontent.com/u/89017432/thanks.png'></p></center>";
document.getElementById('contactus2').innerHTML = "<center>Message Sent! We will try to reply to your email as soon as possible. We thank you for your interest!</center>";
document.getElementById('contactus3').innerHTML = "";
document.getElementById('logo').innerHTML = "<a href='index.html'><img src='https://dl.dropboxusercontent.com/u/89017432/hivepetcare2.png'/></a>";
}

function RedSlip(){
document.getElementById('contactus').innerHTML = "<center><img src='http://www.tattoostime.com/images/421/amazing-illuminati-eye-tattoo-design.png'></p></center>";
document.getElementById('contactus2').innerHTML = "<center><button><a href='https://drive.google.com/file/d/0BwEygq7Jv1FiM2hfWDk3UnFWd0U/view?usp=sharing'>Illuminate Me</a></button></center>";
document.getElementById('contactus3').innerHTML = "";
document.getElementById('logo').innerHTML = "<a href='index.html'><img src='https://dl.dropboxusercontent.com/u/89017432/hivepetcare2.png'/></a>";
}

function EnterPutinville(){
document.getElementById('all').innerHTML = "<iframe src='putinville.html' style='position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>";
}

function EnterMarleyville(){
document.getElementById('all').innerHTML = "<iframe src='marley.html' style='position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>";
}

var r_tip = new Array ();
var i = Math.floor(9*Math.random())
r_tip[0] = "Not to be confused with Hive Pet Care";
r_tip[1] = "Not to be confused with Aperture Science";
r_tip[2] = "Do not name your dog GLaDOS";
r_tip[3] = "Please avoid releasing deadly neurotoxins in-store";
r_tip[4] = "DO NOT GIVE A HAMSTER A PORTAL GUN!";
r_tip[5] = "Do not let Headcrabs play with your pets";
r_tip[6] = "We have better customer service than Black Mesa!";
r_tip[7] = "Consider getting a Companion Cube as your next pet";
r_tip[8] = "Try an Aperture Science Counterproductive Canine Distribution Device";
