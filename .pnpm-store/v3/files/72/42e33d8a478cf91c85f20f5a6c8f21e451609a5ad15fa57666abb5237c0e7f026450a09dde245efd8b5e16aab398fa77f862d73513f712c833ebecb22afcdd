import { Transition, TransitionGroup, defineComponent, h } from "vue";
const unsetStyle = (el) => {
    el.style.transform = "translateY(0)";
    el.style.opacity = "1";
};
export default defineComponent({
    name: "DropTransition",
    props: {
        /**
         * Transition delay
         */
        delay: { type: Number, default: 0 },
        /**
         * Transition duration
         */
        duration: { type: Number, default: 0.25 },
        /**
         * Whether to use TransitionGroup
         */
        group: Boolean,
        /**
         * Whether to use appear
         */
        appear: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const setStyle = (el) => {
            el.style.transition =
                `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
            el.style.transform = "translateY(-20px)";
            el.style.opacity = "0";
        };
        return () => {
            const attrs = {
                name: "drop",
                appear: props.appear,
                onAppear: setStyle,
                onAfterAppear: unsetStyle,
                onEnter: setStyle,
                onAfterEnter: unsetStyle,
                onBeforeLeave: setStyle,
            };
            return props.group
                ? h(TransitionGroup, attrs, slots.default)
                : h(Transition, attrs, slots.default);
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcFRyYW5zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhbnNpdGlvbnMvRHJvcFRyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV0RSxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQVcsRUFBUSxFQUFFO0lBQ3RDLEVBQWtCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7SUFDckQsRUFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFFRixlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsZ0JBQWdCO0lBRXRCLEtBQUssRUFBRTtRQUNMOztXQUVHO1FBQ0gsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBRW5DOztXQUVHO1FBQ0gsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1FBRXpDOztXQUVHO1FBQ0gsS0FBSyxFQUFFLE9BQU87UUFFZDs7V0FFRztRQUNILE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBRUQsS0FBSyxFQUFFLE1BRUw7SUFFRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBVyxFQUFRLEVBQUU7WUFDcEMsRUFBa0IsQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDbEMsYUFBYSxLQUFLLENBQUMsUUFBUSxpQkFBaUIsS0FBSyxDQUFDLEtBQUssY0FBYyxLQUFLLENBQUMsUUFBUSxpQkFBaUIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3BILEVBQWtCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUN6RCxFQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUVGLE9BQU8sR0FBVSxFQUFFO1lBQ2pCLE1BQU0sS0FBSyxHQUFHO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLGFBQWEsRUFBRSxRQUFRO2FBQ3hCLENBQUM7WUFFRixPQUFPLEtBQUssQ0FBQyxLQUFLO2dCQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=