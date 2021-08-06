import moment from "moment";
import Cron from "cron";
import notificationsWorker from "./notification-worker";

/* This is the scheduling module responsible for running the cron Job for watching events*/

const schedulerFactory = function () {
  return {
    start: function () {
      new Cron.CronJob(
        "* * * * *",
        function () {
          console.log(
            "Running Send Notifications Worker for " + moment().format()
          );
          notificationsWorker.run();
        },
        null,
        true,
        ""
      );
    },
  };
};

export default schedulerFactory();
