// 邮箱和密码过滤验证
(function($, doc) {
	// $.init({});

	/* ------------------------登录验证------------------------- */
	doc.getElementById("logo").addEventListener("tap", function(event) {
		var email = doc.getElementById("email").value.toLowerCase().trim();
		var password = doc.getElementById("placeHo").value.trim();
		if (email.length < 5) {
			alert(alertEmail_1);
			return false;
		} else if (email.length > 50) {
			alert(alertEmail_2);
			return false;
		} else if (password.length < 3) {
			alert(alertPasserd_1);
			return false;
		} else if (password.length > 15) {
			alert(alertPasserd_2);
			return false;
		} else {
			localStorage.clear();
			var UserInformation = {
				email:email,
				password:password
			};
			UserInformation = JSON.stringify(UserInformation);
			localStorage.setItem("temp", UserInformation); //存入 参数： 1.调用的值 2.所要存入的数据 
			// console.log(localStorage.getItem("temp")); //输出
		}
		// doLogin();
	});

	mui.plusReady(function() {
		var passLang;
		doc.getElementById("logo").addEventListener("tap", function() {
			passLang = doc.body.className.substring(0, 2)
			mui.openWindow({
				url: "html/homePage.html",
				id: "1",
				waiting: {
					autoShow: false
				},
				extras: {
					name: passLang
				}
			});
		});
	});
})(mui, document);
