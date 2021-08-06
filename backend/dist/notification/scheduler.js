import moment from 'moment';
import Cron from 'cron';
import notificationsWorker from './notification-worker';
const schedulerFactory = function () {
    return {
        start: function () {
            new Cron.CronJob('* * * * *', function () {
                console.log('Running Send Notifications Worker for ' +
                    moment().format());
                notificationsWorker.run();
            }, null, true, '');
        },
    };
};
export default schedulerFactory();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbm90aWZpY2F0aW9uL3NjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUE7QUFDM0IsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sbUJBQW1CLE1BQU0sdUJBQXVCLENBQUE7QUFHdkQsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0M7b0JBQ2xELE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ3JCLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxnQkFBZ0IsRUFBRSxDQUFDIn0=