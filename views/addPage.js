const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    
    <div class="form-group">
      <label for="authorName" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="authorName" name="authorName" type="text" class="form-control"/>
      </div>
    </div>
    <br><br><br>

    <div class="form-group">
      <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="authorEmail" name="authorEmail" type="text" class="form-control"/>
      </div>
    </div>
    <br><br>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <br><br>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea id = "content" name= "content" type = "text" class="form-control"></textarea>
      </div>
    </div>
    <br><br>

    <div class="form-group">
      <label for="pageStatus" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="pageStatus" name="pageStatus" type="radio" value ="open"/> Open &nbsp
       <input id="pageStatus" name="pageStatus" type="radio" value = "closed"/> Closed
     </div>
    </div>
    <br><br>

    <div class="col-sm-offset-5 col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  
  </form>
`);