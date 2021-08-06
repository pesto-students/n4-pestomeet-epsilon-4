import Appointment from "./appointment";

/* This is the wrapper class for given cron job scheduler*/

const notificationWorkerFactory = function () {
  return {
    run: function () {
      Appointment();
    },
  };
};

export default notificationWorkerFactory();
