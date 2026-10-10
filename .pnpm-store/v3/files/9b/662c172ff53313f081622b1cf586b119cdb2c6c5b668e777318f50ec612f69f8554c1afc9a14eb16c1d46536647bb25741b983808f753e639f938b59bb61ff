import { RenderDefault } from "@vuepress/helper/client";
import { Transition, defineComponent, h } from "vue";
import { usePure } from "@theme-hope/composables/usePure";
import { scrollPromise } from "@theme-hope/utils/scrollPromise";
import "@vuepress/helper/transition/fade-in-up.css";
export default defineComponent({
    name: "MainFadeInUpTransition",
    slots: Object,
    setup(_props, { slots }) {
        const pure = usePure();
        return () => pure.value
            ? h(RenderDefault, slots.default)
            : h(Transition, {
                name: "fade-in-up",
                mode: "out-in",
                // Handle scrollBehavior with transition
                onBeforeEnter: scrollPromise.resolve,
                onBeforeLeave: scrollPromise.pending,
            }, slots.default);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkZhZGVJblVwVHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9iYXNlL01haW5GYWRlSW5VcFRyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUVyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFLE9BQU8sNENBQTRDLENBQUM7QUFFcEQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLHdCQUF3QjtJQUU5QixLQUFLLEVBQUUsTUFFTDtJQUVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDckIsTUFBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFdkIsT0FBTyxHQUFVLEVBQUUsQ0FDakIsSUFBSSxDQUFDLEtBQUs7WUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQ0MsVUFBVSxFQUNWO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCx3Q0FBd0M7Z0JBQ3hDLGFBQWEsRUFBRSxhQUFhLENBQUMsT0FBTztnQkFDcEMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxPQUFPO2FBQ3JDLEVBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FDZCxDQUFDO0lBQ1YsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9