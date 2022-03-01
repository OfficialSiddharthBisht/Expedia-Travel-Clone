function navbar(){
    return `
    <nav>
    <ul>
        <div id="left">
            <li><a href="">
                <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="" id="logo">
            </a></li>

            <select name="travel" id="travel">
                <option value="" selected disabled>More Travel</option>
                <option value="">Stays</option>
                <option value="">Flights</option>
                <option value="">Cars</option>
                <option value="">Packages</option>
                <option value="">Holiday activities</option>
                <option value="">Deals</option>
                <option value="">Group & Meetings</option>
                <option value="">Mobile</option>
            </select>
        </div>

        <div class="items">
            <li><a href="">English</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Trips</a></li>
            <li><a href="./sign in/signin.html">Sign in</a></li>
        </div>
    </ul>
</nav>
    `;
}

export default navbar;