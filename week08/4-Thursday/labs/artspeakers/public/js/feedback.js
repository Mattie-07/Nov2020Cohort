$(() =>{

    

    $('.feedback-form').submit(e =>{
        //we are going to make an api call
        e.preventDefault();
        $.post("/api" , {
            //with jquery we dont have to use the fetch or the then or the stringy method either. All of it is done inside of jquery.
            name : $("#feedback-forum-name").val(),
            title : $("#feedback-forum-title").val(),
            message: $("#feedback-forum-message").val(),
              // $.post has three arguments ,
        }, updateFeedback)

    })

    //$.ajax there is a another delete function that would allow for the 
        const updateFeedback = (data) => {
        
            console.log(data);
            let output = "";
            // we are getting an array of objects from out api
            //we want to be able to create a chunck of code that has the name/ title/ message
            //we wil concatenate the output

            //data is coming back from our api
            //below we will loop and concatenate.
            data.forEach(item, key =>{
                //we could delete with key...?
                output += '     <div class="feedback-item item-list media-list">';
                output += '       <div class="feedback-item media">';
                output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
                output += '         <div class="feedback-info media-body">';
                output += '           <div class="feedback-head">';
                output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
                output += '           </div>';
                output += '           <div class="feedback-message">' + item.message + '</div>';
                output += '         </div>'; 
                output += '       </div>';
                output += '     </div>';
            })
            $(".feedback-messages").html(output);
        }
            $.getJSON("/api", updateFeedback)
    })
