var colors = ["aqua","fuchsia","lime","olive","red","maroon",
	"orange","yellow","blue","green","purple","teal","pink"]
var person1 = {
		id: "138302201",
		name: "邓小玲",
		addr: "湖北-孝感",
		title: "不忘初心 方得始终",
	};
var person2 = {
		id: "138302202",
		name: "黄珍",
		addr: "江西-宜春",
		title: "女神",
	};
var person3 = {
		id: "138302203",
		name: "林桂喜",
		addr: "广东-英德",
		title: "心若在，梦就在",
	};
var person4 = {
		id: "138302205",
		name: "任岚钰",
		addr: "江西-景德镇",
		title: "你们陪我长大，我陪你们变老",
	};
var person5 = {
		id: "138302206",
		name: "吴秀华",
		addr: "江西-上饶",
		title: "爱笑的人运气不会太差",
	};
var person6 = {
		id: "138302207",
		name: "熊小妹",
		addr: "江西-南昌",
		title: "想要飞得更高 就该把地平线忘掉",
	};
var person7 = {
		id: "138302208",
		name: "杨敏",
		addr: "江西-九江",
		title: "以后的某天会感谢现在努力的自己！",
	};
var person8 = {
		id: "138302210",
		name: "钟雨晨",
		addr: "江西-南昌",
		title: "学会低调 取舍间 必有得失",
	};
var person9 = {
		id: "138302211",
		name: "周雨心",
		addr: "江西-上饶",
		title: "往前走 别回头",
	};
var person10 = {
		id: "138302213",
		name: "程超",
		addr: "江西-鄱阳",
		title: "学会努力，明天会更好！",
	};
var person11 = {
		id: "138302214",
		name: "程希平",
		addr: "江西-上饶",
		title: "愿不负每一个的真心相伴",
	};
var person12 = {
		id: "138302215",
		name: "冯建军",
		addr: "江西-景德镇",
		title: "好好学习",
	};
var person13 = {
		id: "138302230",
		name: "熊文斌",
		addr: "江西-抚州",
		title: "一路上诱惑太多，要学会把自己的精力用来做最主要的事",
	};
var person14 = {
		id: "138302234",
		name: "周浩然",
		addr: "上海市",
		title: "立浮华之世，奏天籁之音",
	};

var person15 = {
		id: "138302235",
		name: "朱睿",
		addr: "江苏-苏州",
		title: "只是突然累了",
	};
var person16 = {
		id: "138302216",
		name: "何强",
		addr: "江西-赣州",
		title: "强强哒",
	};
var person17 = {
		id: "138302217",
		name: "将家鑫",
		addr: "江西-九江",
		title: "啦啦啦 德玛西亚",
};
var person18 = {
		id: "138302218",
		name: "兰瑞胜",
		addr: "福建-泉州",
		title: "谁的青春不迷茫，其实我们都一样",
	};
var person19 = {
		id: "138302219",
		name: "刘拯朝",
		addr: "江西-吉安",
		title: "原谅我这一生放荡不羁，笑点低",
	};
var person20 = {
		id: "138302220",
		name: "龙本峻",
		addr: "贵州-黔东南",
		title: "愿我会揸(zha)火箭，带你到天空去",
	};
var person21 = {
		id: "138302221",
		name: "潘熙正",
		addr: "江西-九江",
		title: "一起出任ceo 担任总经理 ！",
	};
var person22 = {
		id: "138302223",
		name: "陶尧",
		addr: "江西-万年",
		title: "每个同学都是大牛！",
	};
var person23 = {
		id: "138302224",
		name: "涂建坤",
		addr: "江西-景德镇",
		title: "No pain No gain.",
	};
var person24 = {
		id: "138302225",
		name: "万德敏",
		addr: "江西-南昌",
		title: "Change,you need!",
	};
var person25 = {
		id: "138302226",
		name: "王福生",
		addr: "江西-吉安",
		title: "1383022的伙伴们，爱你们哟！",
	};
var person26 = {
		id: "138302228",
		name: "吴琦",
		addr: "江西-景德镇",
		title: "看不见的 是不是就等于不存在 记住的 是不是永远不是消失<br/>Invisible presence is really not remember is not never disappear",
	};
var person27 = {
		id: "138302229",
		name: "熊必峰",
		addr: "江西-南昌",
		title: "空尼奇哇",
	};
var person28 = {
		id: "138302232",
		name: "曾昭帅",
		addr: "江西-吉安",
		title: "愿有人待你如初，疼你入骨，从此深情不被辜负，敬你一杯酒，愿你有诗，有梦，有坦荡荡的远方，我干杯，你随意！",
	};
var person29 = {
		id: "138302233",
		name: "章彪",
		addr: "江西-上饶",
		title: "希望大家能找到自己如意的工作，并为此努力奋斗，加油！！",
	};	
var people = [person1,person2,person3,person4,person5,person6,
		person7,person8,person9,person10,person11,person12,person13,
		person14,person15,person16,person17,person18,person19,person20,
		person21,person22,person23,person24,person25,person26,person27,
		person28,person29];
	
function initPersonalCard() {
	//var randomPerson = people[selectFrom(0,people.length-1)];
	var randomPerson = people[18];
	var randomColor = colors[selectFrom(0,colors.length-1)];
	var randomNum = randomPerson.id.slice(-2);
	if(randomNum.charAt(0) === '0') {
		randomNum = randomNum.slice(-1);
	}

	var closer = document.getElementById("closer");
	closer.style.color=randomColor;
	closer.innerHTML = "X";
	closer.className = "closerClass";

	var bgimg = document.getElementById("bgimg");
	bgimg.src="picture/classmates/background/" + randomNum + ".jpg";
	bgimg.className = "bgimgClass";

		
	var icon = document.createElement("img");
	icon.src ="picture/classmates/icons/" + randomNum + ".jpg";
	var div = document.createElement("div");
	div.innerHTML="<span>"+randomPerson.name+"</span><br />"+
	randomPerson.id+"<br />"+randomPerson.addr;
	var personalMeta = document.getElementById("personalMeta");
	personalMeta.innerHTML = "";
	personalMeta.appendChild(icon);
	personalMeta.appendChild(div);
	personalMeta.className = "personalMetaClass";

	var signature = document.getElementById("signature");
	signature.innerHTML=randomPerson.title;
	signature.style.color = randomColor;
	signature.className = "signatureClass";

	var personalCard = document.getElementById("personalCard");
	personalCard.className = "personalCardClass";
	var imgs = personalCard.getElementsByTagName("img");
	
	var totalimg = 0;
	var loadedimg = 0;
	while (totalimg < imgs.length) {
		imgs[totalimg].onload = function() {
			loadedimg ++;
			if(totalimg === loadedimg) {
				personalCard.style.display = "block";
			}
		};
		totalimg ++;
	}
}
function selectFrom(lowerValue,upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}
