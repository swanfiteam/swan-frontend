MAIN = {
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('.hamburger-icon').click (function(){
            $(this).toggleClass('open');
            $('header nav').slideToggle();
        });

		$(".scrollTo").on('click', function(e) {
		     e.preventDefault();
		     var target = $(this).attr('href');
		     $('html, body').animate({
		       scrollTop: ($(target).offset().top - 60)
		     }, 500);
		});

	}
}


$(function () {
	MAIN.init();
	AOS.init();
});


$(".clipboard" ).click(function() {
	var id = $(this).attr('id');
	var clipboard = new ClipboardJS("#" + id);
	var text = $("#" + id + ' a span').html();
	clipboard.on('success', function(e) {
		$("#" + id + ' a span').html('Copied');
		setTimeout(function(){
			$("#" + id + ' a span').html(text);
		}, 1000);

	    e.clearSelection();
	});
});

//bsc_last bsc_price bsc_market_cap bsc_burn bsc_bouns	

/*function connectWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        conn = await window.ethereum.enable();
        console.log(conn.length)

        ethconnected = conn.length > 0
        if (ethconnected) {
            ethaddress = conn[0]
            initAllPool();
        }
        updateConnectStatus()
        web3.eth.getAccounts().then(console.log);
        console.log('read')
      //  var data = $.getJSON('./static/js/pending.json')

     //

        return true;
    }
}

let web3 = new Web3(Web3.givenProvider || "https://bsc-dataseed.binance.org");
contract.methods.name().call().then( function(result){ output("name", result )} );
contract.methods.symbol().call().then( function(result){ output("symbol", result )} );
contract.methods.decimals().call().then( function(result){ output("decimals", result ); db.decimals = result} );
contract.methods.balanceOf(address).call().then( function(result){ output("balanceOf", result )} );*/

//console.log("ethereum", window.ethereum)
//var web3 = new Web3("https://bsc-dataseed.binance.org");
//web3.eth.getBalance("0x03Bd77990F28a2393792Fa111E553F4665121C88").then(function(result){ console.log("getBalance", result) });
