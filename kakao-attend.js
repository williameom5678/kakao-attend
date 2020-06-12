/*MIT License

Copyright (c) 2020 williameom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var attend = {};
var 출첵 = [];
let allsee = "​".repeat(500);
make_object = (rm) => {
  var a = attend[rm] = {};
  var b = a["출석"] = [];
  return;
};
push_object = (r, s) => {
  if (attend[r] == undefined) {
    make_object(r);
  }
  var a = attend[r]["출석"];
  a.push(s);
  return;
};
response =(room, msg, sender, isGroupChat, replier, imageDB)=> {
if (attend[room] == undefined) {
  make_object(room);
}
var aa = JSON.stringify(attend[room]["출석"]);
if (msg == "/ㅊㅊ" || msg == "/출석") {
  if( aa.indexOf(sender) != -1){
    replier.reply("ʙᴏᴛ\n" + "오늘" + sender + "님은 이미 출석체크를 하셨습니다.");
  } else {
    출첵.push(sender);
    push_object(room, sender);
    replier.reply("ʙᴏᴛ\n" + sender + "님 출석체크하였습니다.");
  }
}
if (msg == "/출석목록" || msg == "/출첵목록") {
  try {
    var m1 = JSON.stringify(attend);
    var m16a1 = attend[room]["출석"];
    var m16a2 = m16a1.join("\n");
    var m16a3 = room;
    replier.reply("ʙᴏᴛ\n" + room + "의 출석목록 입니다.\n" + allsee + "\n" + m16a2);
  } catch (e) {
    replier.reply("ʙᴏᴛ\n" + room + "의 출석자 가 없습니다." + e);
  }
}
if (String(new Date().getHours()) == 24) {
  attend = {};
  출첵 = [];
}
if(msg == "객체"){
  replier.reply(JSON.stringify(attend));
  }
};
