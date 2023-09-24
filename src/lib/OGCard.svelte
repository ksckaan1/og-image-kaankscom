<script>
    import "./style.css"

    export let title = "Kaydırılabilir element oluşturma (Vanilla JS/HTML/CSS)"
</script>

<div class="card">
    <div class="left">
        <img src="https://og.kaanksc.com/avatar.png" alt="">
        <div class="name">KAAN KUSCU</div>
        <div class="job-title">BACKEND DEVELOPER</div>
    </div>
    <div class="right">
        <div class="post-title">
            {title}
        </div>
        <div class="website">
            kaanksc.com
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;
        width: 1200px;
        height: 630px;
        background-color: #2C165C;
        color: #C9C9C9;
        font-family: 'Poppins', sans-serif;
    }

    .card .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 355px;
        height: 630px;
        background-color: #411F89;
        border-right: 1px solid rgba(255, 255, 255, 0.20);
    }

    .left img{
        width: 230px;
        height: 414px;
        object-fit: cover;
        border-radius: 115px;
        border: 1px solid rgba(255, 255, 255, 0.20);
    }

    .left .name{
        font-size: 32px;
        font-weight: 700;
        margin-top: 10px;
    }

    .left .job-title{
        font-size: 18px;
        font-weight: 900;
        background-color: #F5B32F;
        color: #2C165C;
        height: 36px;
        padding: 8px 10px;
    }
    
    .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 70px;
        height: 630px;
        flex: 1;
    }

    .post-title{
        color: #F5B32F;
        font-weight: 700;
        font-size: 48px;
    }

    .website{
        color: rgba(201, 201, 201, 0.70);
        font-weight: 200;
        font-size: 48px;
    }
</style>