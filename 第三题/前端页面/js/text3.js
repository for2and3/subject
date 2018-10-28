var send = (function() {
	var Blank = document.getElementById("blank");
	var talkWords = document.getElementById("talkwords");
	var talkSub = document.getElementById("talksub");
	num = 2;
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (hour >= 0 && hour <= 9) {
		hour = "0" + hour;
	}
	if (minute >= 0 && minute <= 9) {
		minute = "0" + minute;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + hour + ':' + minute;
	return {

		init: function() {

			this.event();
		},
		event: function() {
			var that = this;
			talkSub.onclick = function() {
				that.chart();
			}
		},
		chart: function() {
			var str = "";
			if (talkWords.value == "") {

				alert("消息不能为空");
				return;
			} else {
				num++;
				str = '<div class="comment">' +
					'<span class="comment-avatar">' +
					'<img src="./images/avatar1.jpg" alt="avatar">' +
					'</span>' +
					'<div class="comment-content">' +
					'<p class="comment-content-name">EdmundDZhang</p>' +
					'<p class="comment-content-article">' + talkWords.value + '</p>' +
					'<p class="comment-content-footer">' +
					'<span class="comment-content-footer-id">#' + num + '</span>' +
					'<span class="comment-content-footer-device">来自安卓客户端</span>' +
					'<span class="comment-content-footer-timestamp">' + currentdate+ '</span>' +
					'</p>' +
					'</div>' +
					'<div class="cls"></div>' +
					'</div>';
			}
			Blank.innerHTML = str + Blank.innerHTML;
			talkWords.value = "";

		}

	}

}());

send.init();
