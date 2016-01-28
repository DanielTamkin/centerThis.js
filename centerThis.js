/*centerThis.js - by Danieltamkin*/
/*center an element to its parent.*/
(function( $ ) {
	$.fn.centerThis = function(data) {
		$this = $(this);
		$data = datacheck(data);
	/*> data*/
		function datacheck(data){
		  return datascrub(data);
		}
		function datatemplate(){
		  return {
		    browser: false,
				offsetTop: 0,
				destructive: false
			}
		}
		function datascrub(data){
		  template = datatemplate();
			if(data == undefined || $.isEmptyObject(data) == true){
				data = template;
			}
			else{
			  $.each(template,function(key,value){
			    $.each(data,function(bravokey,bravovalue){
			      if(bravokey == key){
			        if(bravovalue.length === -1){
			          value = value;
			        }
			        else{
			          // do nothing, bravovalue is in bravokey
			        }
			      }
			      else{
			        if(!(key in data)){// that key doesnt exist? make it.
			          data[key] = value;
			        }
			      }
			    });
			  });
			}
			return data;
		}
	/*> calculate*/
		function calculateTop(){
			var elementTop 			= null,
					elementHeight		= null,
					parentHeight		= null,
					browserHeight 	= null;
			if($data.browser === true){
				console.log("asdf");
				browserHeight = $(window).height();
				elementHeight	= $this.outerHeight();
				elementTop	 	= (browserHeight/2) - (elementHeight/2);
			}
			else{
				parentHeight = $this.parent().outerHeight();
				elementHeight	= $this.outerHeight();
				elementTop	 	= (parentHeight/2) - (elementHeight/2);
			}
			if($data.offsetTop !== 0){
				elementTop -= $data.offsetTop;
			}
			return elementTop;
		}
		function calculateLeft(){
			if($data.browser === true){
				var browserWidth 	= $(window).width(),
						elementWidth 	= $this.width(),
						elementLeft	 	= (browserWidth/2) - (elementWidth/2);
						console.log("calculateLeft: "+elementLeft);
			}
			else{
				var browserWidth 	= $this.parent().width(),
						elementWidth 	= $this.width(),
						elementLeft	 	= (browserWidth/2) - (elementWidth/2);
			}

			return elementLeft;
		}
		function calculate(){
			var elementTop 	= calculateTop(),
					elementLeft = calculateLeft();
			console.log(elementTop+": :"+elementLeft);
			if($data.destructive === true){
				$this.css("position","relative");
				$this.css("margin-top",elementTop+"px");
				$this.css("margin-left",elementLeft+"px");
			}
			else{
				$this.css("position","absolute");
				$this.css("top",elementTop+"px");
				$this.css("left",elementLeft+"px");
			}
		}
		return this.each(function() {
			$(document).ready(function() {
				calculate();
			});
			$(window).resize(function() {
				calculate();
			});
		});
	 };
}( jQuery ));
