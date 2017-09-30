function start() {
	        var Id = document.getElementById('name').value;
	        var ID1 = document.getElementById("name").parentNode.getElementsByTagName("span")[0]

	        if(Id.length == 0) {
		        ID1.innerHTML = "Vui lòng nhập thông tin người mua";
		        ID1.style.color = "red";
	            }
	        else {
                ID1.innerHTML = "✓";
		        ID1.style.color = "green";
	            }

	        var Id = document.getElementById('address').value;
	        var ID1 = document.getElementById("address").parentNode.getElementsByTagName("span")[0]

	        if(Id.length == 0) {
		            ID1.innerHTML = "Vui lòng nhập địa chỉ";
		            ID1.style.color = "red";
	            }
	        else {
		            ID1.innerHTML = "✓";
		            ID1.style.color = "green";
	            }

	        var Id = document.getElementById('tel').value;
	        var ID1 = document.getElementById("tel").parentNode.getElementsByTagName("span")[0]

	        if(Id.length == 0) {
		            ID1.innerHTML = "Vui lòng nhập sô điện thoại";
		            ID1.style.color = "red";
	            }
	        else {
		            ID1.innerHTML = "✓";
		            ID1.style.color = "green";
	            }

	        var Id = document.getElementById('email').value;
	        var ID1 = document.getElementById("email").parentNode.getElementsByTagName("span")[0]

	        if(Id.length == 0) {
		            ID1.innerHTML = "Vui lòng nhập email";
		            ID1.style.color = "red";
	            }
	        else {
		            ID1.innerHTML = "✓";
		            ID1.style.color = "green";
	            }
