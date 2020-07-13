$(document).ready(function () {
    const getNotes = () => {
        $.get('/api/notes', function(data) {
            data.map(note => {
                console.log(note);
                const li = $('<li>');
                const btn = $(`<a type="button" class="button" id=${note.id}>`);
                btn.html('<h6>' + note.title + '</h6>');
                btn.append('<p>' + note.text + '</p>');
                btn.append('')
                li.append(btn);
                $('#notes').append(li);
            })
         });
    };
    getNotes();

        $('#saveNote').on("click", function() {
            //Create simple, but unique ID
            let id = Math.floor(100000 + Math.random() * 900000);
            let data = {
                id: id,
                title: $('#title').val(),
                text: $('#entry').val()
            }

            $.ajax({
                url: '/api/notes',
                method: 'POST',
                data: data
            }).then(function(response) {
                console.log(response);
            });

            $("ul").empty();
            $('#title').val("");
            $('#entry').val("");
            getNotes();
        });

        $(document).on("click", ".button", function(){
            const remove = confirm("Would you like to delete this note?");
            if(remove === true) {
                const deleteId = this.id;
                console.log(deleteId);
                $.ajax({
                    url: `/api/notes/${deleteId}`,
                    method: 'DELETE'
                });
                location.reload();
                getNotes();
            }
        });
    
});