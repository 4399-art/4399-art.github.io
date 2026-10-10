import { defineComponent, h, onMounted, ref } from "vue";
import MainFadeInUpTransition from "@theme-hope/components/base/MainFadeInUpTransition";
import PasswordModal from "@theme-hope/components/encrypt/PasswordModal";
import { useGlobalEncrypt } from "@theme-hope/composables/encrypt/useGlobalEncrypt";
export default defineComponent({
    name: "GlobalEncrypt",
    slots: Object,
    setup(_props, { slots }) {
        const { status, validate } = useGlobalEncrypt();
        const isMounted = ref(false);
        onMounted(() => {
            isMounted.value = true;
        });
        return () => {
            const { isEncrypted, isLocked, hint } = status.value;
            return h(MainFadeInUpTransition, () => isEncrypted
                ? isMounted.value
                    ? isLocked
                        ? h(PasswordModal, {
                            full: true,
                            hint,
                            onVerify: validate,
                        })
                        : slots.default()
                    : null
                : slots.default());
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsRW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9lbmNyeXB0L0dsb2JhbEVuY3J5cHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6RCxPQUFPLHNCQUFzQixNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sYUFBYSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRXBGLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxlQUFlO0lBRXJCLEtBQUssRUFBRSxNQUVMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBVSxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FBTyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQ3BDLFdBQVc7Z0JBQ1QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLO29CQUNmLENBQUMsQ0FBQyxRQUFRO3dCQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFOzRCQUNmLElBQUksRUFBRSxJQUFJOzRCQUNWLElBQUk7NEJBQ0osUUFBUSxFQUFFLFFBQVE7eUJBQ25CLENBQUM7d0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLENBQUMsQ0FBQyxJQUFJO2dCQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQ3BCLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=