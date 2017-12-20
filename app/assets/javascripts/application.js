//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).on("turbolinks:load", function(){
 $("#upload_file").on("direct-uploads:start", function(){
    $("h<b>4.</b>progress").show();
 });

 $("#bucket_files").on("direct-upload:progress", function(event){
    $("h<b>4.</b>progress span.progress_count").html(event.detail.progress);
 });
});
