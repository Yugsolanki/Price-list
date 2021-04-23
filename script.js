function downloadimage() {
            var container = document.getElementById("my-node"); //specific element on page
            
            html2canvas(container).then(function (canvas) {

                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "html_image.jpg";
                link.href = canvas.toDataURL();
                link.target = '_blank';
                link.click();
            });
        }