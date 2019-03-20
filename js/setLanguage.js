var alertEmail_1,alertEmail_2,alertPasserd_1,alertPasserd_2;// 邮箱验证弹出和密码验证弹出内容
// 设定语言的函数
		var showLang = {
			nowLang: '', 
			SL : function setLang(UL,LC){
					// console.log(LC)
					var language = LC;
					var urlLang = UL;
					jQuery.i18n.properties({
					    name: 'strings', // 资源文件名称
					    path: urlLang, // 资源文件所在目录路径
					    mode: 'map', // 模式：变量或 Map 
					    language: language, // 对应的语言
					    cache: false,
					    encoding: 'UTF-8',
					    callback: function () { // 回调方法用来调取语言包里面的对应语言
// 					        for (var i in $.i18n.map) {
// 					        	$('[data-lang="' + i + '"]').text($.i18n.map[i]);
// 					        };
							$('[data-i18n-placeholder]').each(function () {
							
								$(this).attr('placeholder', $.i18n.map[$(this).data('i18n-placeholder')]);
							});
							
							$('[data-lang]').each(function () {
								$(this).text($.i18n.map[$(this).data('lang')]);
							});
							
							
// 							$("#email").attr('placeholder',$.i18n.map['string_lang1']);
// 							$("#placeHo").attr('placeholder',$.i18n.map['string_lang2']);
// 							alertEmail_1 = $.i18n.map['string_lang7'];
// 							alertEmail_2 = $.i18n.map['string_lang8'];
// 							alertPasserd_1 = $.i18n.map['string_lang9'];
// 							alertPasserd_2 = $.i18n.map['string_lang10'];
					    }
					});
					this.nowLang = LC;
				}
		};
			
			
// 						// 获取初始语言并设定
// 			window.onload=function (lOld){
// 				lOld = jQuery.i18n.normaliseLanguageCode({});
// 				setLang(lOld)
// 			};
// 			
// 			// mui 选择器组件
// 			(function($, doc) {
// 				// 设定弹出的语言选项
// 					var userPicker = new $.PopPicker();
// 					userPicker.setData([{
// 						value: 'en',
// 							text: 'English'
// 						}, {
// 							value: 'py',
// 							text: 'Pусский'
// 						}, {
// 							value: 'rm',
// 							text: 'Romana'
// 						}, {
// 							value: 'sb',
// 							text: 'Serbian'
// 						},{
// 							value: 'zh',
// 							text: '简体中文'
// 						}]);
// 					var showUserPickerButton = doc.getElementById('showUserPicker');
// 					var userResult = doc.getElementById('userResult');
// 					// 点击的时候改变语言
// 					showUserPickerButton.addEventListener('tap', function(event) {
// 						userPicker.show(function(items) {
// 							showUserPickerButton.innerText = items[0].text;
// 							// userResult.innerText = JSON.stringify(items[0]);
// 							LC=items[0].value;//语言改变后传值
// 							//返回 false 可以阻止选择框的关闭
// 							//return false;
// 							langChange(LC)
// 						});
// 					}, false);
// 			})(mui, document);
// 			
// 			// 中转，把选定的语言传入到需要的地方
// 			function langChange(LC){
// 				    document.body.className = LC;
// 					setLang(LC)
// 					console.log(LC)
// 			};
			
			
// 			// 邮箱和密码过滤验证
// 			(function($, doc) {
// 							// $.init({});
// 							
// 							/* ------------------------登录验证------------------------- */
// 							doc.getElementById("logo").addEventListener("tap",function(LC){
// 									var email=doc.getElementById("email").value.toLowerCase().trim();
// 									var password=doc.getElementById("placeHo").value.trim();
// 									// console.log(setLang.ss);
// 									if(email.length < 5){
// 										alert(alertEmail_1);
// 										return false;
// 									}else if(email.length > 50){
// 											alert(alertEmail_2);
// 											return false;
// 									}else if(password.length<3){
// 										alert(alertPasserd_1);
// 										return false;
// 									}else if(password.length>15){
// 										alert(alertPasserd_2);
// 										return false;
// 									}
// 							});
// 						})(mui, document);
			
			