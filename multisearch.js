/*Adding tumblr api
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'ZWDgzPEtw6jj2HQucMFsAVQtQIkXqJfgu5HVppte4rk3cbh0bK',
  consumer_secret: '<consumer secret>',
  token: '<oauth token>',
  token_secret: '<oauth token secret>'
});*/

document.addEventListener('DOMContentLoaded', function() {
	var on_click = document.getElementById('on_click');
	
	on_click.addEventListener('click', function(){
		make_search_strings();
	});

	function make_search_strings(){
		var search_string = document.getElementById('search_params').value;

		var split_array = new Array();
		split_array = search_string.split(" ");

		var fixed_split_array = new Array();
		var j=0;
		for(var i=0; i < split_array.length; ++i){
			if(split_array[i][0] !== '#'){
				fixed_split_array[j-1] += " ";
				fixed_split_array[j-1] += split_array[i];
				}
			else{
				fixed_split_array[j] = split_array[i];
				++j;
			}
		}
		document.getElementById('thisisfortests').innerHTML = '';
		for(var k=0; k < fixed_split_array.length; ++k){
			document.getElementById('thisisfortests').innerHTML += (fixed_split_array[k] + "<br>");
		};

	};
});