window.addEventListener('DOMContentLoaded', (e) => {
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init('scheduler_here', new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), "month");

    scheduler.templates.xml_date = function (value) { return new Date(value); };
    scheduler.load("/data", "json");
});