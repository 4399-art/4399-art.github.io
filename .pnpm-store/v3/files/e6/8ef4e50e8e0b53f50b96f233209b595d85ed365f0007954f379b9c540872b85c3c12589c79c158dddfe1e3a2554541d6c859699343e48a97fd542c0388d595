import { defineComponent, h, onMounted, ref } from "vue";
import PasswordModal from "@theme-hope/components/encrypt/PasswordModal";
import { usePathEncrypt } from "@theme-hope/composables/encrypt/usePathEncrypt";
export default defineComponent({
    name: "LocalEncrypt",
    slots: Object,
    setup(_props, { slots }) {
        const { status, validate } = usePathEncrypt();
        const isMounted = ref(false);
        onMounted(() => {
            isMounted.value = true;
        });
        return () => {
            const { isEncrypted, isLocked, hint } = status.value;
            return isEncrypted
                ? isMounted.value
                    ? isLocked
                        ? h(PasswordModal, {
                            showTitle: true,
                            full: true,
                            hint,
                            onVerify: validate,
                        })
                        : slots.default()
                    : null
                : slots.default();
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxFbmNyeXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2VuY3J5cHQvTG9jYWxFbmNyeXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFekQsT0FBTyxhQUFhLE1BQU0sOENBQThDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRWhGLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLEtBQUssRUFBRSxNQUVMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBRTlDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQW9DLEVBQUU7WUFDM0MsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUFPLFdBQVc7Z0JBQ2hCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSztvQkFDZixDQUFDLENBQUMsUUFBUTt3QkFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTs0QkFDZixTQUFTLEVBQUUsSUFBSTs0QkFDZixJQUFJLEVBQUUsSUFBSTs0QkFDVixJQUFJOzRCQUNKLFFBQVEsRUFBRSxRQUFRO3lCQUNuQixDQUFDO3dCQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUNuQixDQUFDLENBQUMsSUFBSTtnQkFDUixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMifQ==