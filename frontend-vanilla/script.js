var xhr = null;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

function dataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("User data received!");
        getDate();
        dataDiv = document.getElementById('result-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}


const getUsers = () => {
    console.log('getting users')
    $.ajax({
        url: "http://127.0.0.1:6969/users",
        type: 'GET',
        dataType: 'json', // added data type
        success: (res) => {
            console.log(res);
            alert("success");
        }
    });
}

const getCourseData = (subject) => {
    console.log('getting course data for' + subject)
    $.ajax({
        url: "http://localhost:6969/get_course",
        type: 'POST',
        data: JSON.stringify({'subject': subject}),
        dataType: 'json',
        contentType: 'application/json',
        success: (res) => {
            console.log(res);
            alert("success");
        },
        error: (err) => {
            console.log(err);
            alert("error");
        }
    })
}


$('#submit-btn').click(() => {
    console.log('button was clicked');
    const subject_input = $('#subject-input').val();
    getCourseData(subject_input);
    document.getElementById("myDiv").style.display = "";
    
    //document.getElementById("myDiv").style.display = "";
});

$(document).ready(function() {
    console.log('jquery ready')
});

        //document.getElementById('time-container').textContent
         //   = date;
