const sidebar = document. querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventlistener('click', () => {
    sidebar.classist.toggle('active');
});
