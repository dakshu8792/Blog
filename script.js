let images=document.getElementsByTagName('img');

for(let i=0; i<images.length; i++)
{
        images[i].addEventListener('click', function() {
                document.querySelector('body').style.cssText=`
                backgorund-image: url(${images[i].src});
                backgorund-repeat: no-repeat;
                backgorund-position:center;`;
        });
}

function toggleSubscribe() {
            const button = document.getElementById('subscribeButton');
            if (button.textContent === 'Subscribe') {
                button.textContent = 'Unsubscribe';
                button.classList.add('unsubscribed');
            } else {
                button.textContent = 'Subscribe';
                button.classList.remove('unsubscribed');
            }
        }

        // Enable toggle on click
        document.getElementById('subscribeButton').addEventListener('click', toggleSubscribe);

        function darkModeButton() {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = 'white';
}