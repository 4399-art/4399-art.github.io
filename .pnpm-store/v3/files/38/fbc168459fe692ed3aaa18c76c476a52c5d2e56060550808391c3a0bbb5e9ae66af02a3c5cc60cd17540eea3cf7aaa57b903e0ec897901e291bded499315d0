let promise = null;
let promiseResolve = null;
export const scrollPromise = {
    wait: () => promise,
    pending: () => {
        promise = new Promise((resolve) => {
            promiseResolve = resolve;
        });
    },
    resolve: () => {
        promiseResolve?.();
        promise = null;
        promiseResolve = null;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsUHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvdXRpbHMvc2Nyb2xsUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFJLE9BQU8sR0FBeUIsSUFBSSxDQUFDO0FBQ3pDLElBQUksY0FBYyxHQUF3QixJQUFJLENBQUM7QUFFL0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQjtJQUMxQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTztJQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQyJ9