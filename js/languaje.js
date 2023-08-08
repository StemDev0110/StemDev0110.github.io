const switchElement = document.getElementById('switch');
        let isOn = false;

        function toggleSwitch() {
            isOn = !isOn;
            switchElement.className = isOn ? 'switch on' : 'switch';
        }

        switchElement.addEventListener('click', toggleSwitch);