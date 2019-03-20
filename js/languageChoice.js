			// 获取初始语言并设定
			mui.ready(function (){
				var browserLang = jQuery.i18n.normaliseLanguageCode({});
				var urlLang = 'language/';
				showLang.SL(urlLang,browserLang)
			});
			
			// mui 选择器组件
			(function($, doc) {
				// 设定弹出的语言选项 
					var userPicker = new $.PopPicker();
					userPicker.setData([{
						value: 'en_US',
							text: 'English'
						}, {
							value: 'ro_RO',
							text: 'Romana',
						}, {
							value: 'ru_RU',
							text: 'Pусский'
						}, {
							value: 'sr_SP_Latn',
							text: 'Serbian'
						},{
							value: 'zh_CN',
							text: '简体中文'
						}]);
					var showUserPickerButton = doc.getElementById('showUserPicker');
					var userResult = doc.getElementById('userResult');
					// 点击的时候改变语言
					showUserPickerButton.addEventListener('tap', function(event) {
						userPicker.show(function(items) {
							showUserPickerButton.innerText = items[0].text;
							// userResult.innerText = JSON.stringify(items[0]);
							LC=items[0].value;//语言改变后传值
							document.body.className = LC;
							var urlLang = 'language/';
							showLang.SL(urlLang,LC)
							//返回 false 可以阻止选择框的关闭
							//return false;
							localStorage.setItem('aa',LC);
							alert(localStorage.getItem("aa"))
						});
					}, false);
			})(mui, document);
			
			
			
			
