import { useSessionStorage, useStorage } from "@vueuse/core";
import { compareSync } from "bcrypt-ts/browser";
import { computed } from "vue";
import { useEncryptConfig } from "@theme-hope/composables/encrypt/useEncryptConfig";
const STORAGE_KEY = "VUEPRESS_HOPE_GLOBAL_TOKEN";
export const useGlobalEncrypt = () => {
    const encryptData = useEncryptConfig();
    const storageToken = useStorage(STORAGE_KEY, "");
    const sessionToken = useSessionStorage(STORAGE_KEY, "");
    const status = computed(() => {
        const { global = false, admin } = encryptData.value;
        // Is globally encrypted
        const isEncrypted = global && Boolean(admin?.tokens.length);
        const isLocked = 
        // Valid token exists
        isEncrypted
            ? storageToken.value
                ? // oxlint-disable-next-line typescript/no-non-null-assertion
                    encryptData.value.admin.tokens.every(
                    // None of the token matches
                    (hash) => !compareSync(storageToken.value, hash))
                : // oxlint-disable-next-line typescript/no-non-null-assertion
                    encryptData.value.admin.tokens.every(
                    // None of the token matches
                    (hash) => !compareSync(sessionToken.value, hash))
            : false;
        return {
            isEncrypted,
            isLocked,
            hint: admin?.hint ?? "",
        };
    });
    const validate = (inputToken, keep = false) => {
        (keep ? storageToken : sessionToken).value = inputToken;
    };
    return {
        status,
        validate,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlR2xvYmFsRW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9zYWJsZXMvZW5jcnlwdC91c2VHbG9iYWxFbmNyeXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFHL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFcEYsTUFBTSxXQUFXLEdBQUcsNEJBQTRCLENBQUM7QUFPakQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsR0FBa0IsRUFBRTtJQUNsRCxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBRXZDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXhELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDM0IsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUVwRCx3QkFBd0I7UUFDeEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVELE1BQU0sUUFBUTtRQUNaLHFCQUFxQjtRQUNyQixXQUFXO1lBQ1QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLO2dCQUNsQixDQUFDLENBQUMsNERBQTREO29CQUM1RCxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDbkMsNEJBQTRCO29CQUM1QixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FDakQ7Z0JBQ0gsQ0FBQyxDQUFDLDREQUE0RDtvQkFDNUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ25DLDRCQUE0QjtvQkFDNUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQ2pEO1lBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVaLE9BQU87WUFDTCxXQUFXO1lBQ1gsUUFBUTtZQUNSLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsQ0FBQyxVQUFrQixFQUFFLElBQUksR0FBRyxLQUFLLEVBQVEsRUFBRTtRQUMxRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUVGLE9BQU87UUFDTCxNQUFNO1FBQ04sUUFBUTtLQUNULENBQUM7QUFDSixDQUFDLENBQUMifQ==