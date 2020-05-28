import { v4 as uuidv4 } from 'uuid';

const MY_UUID_KEY = 'my-uuid'

export function getMyUuid(): string {
    const loadedUuid = localStorage.getItem(MY_UUID_KEY)
    if (loadedUuid == null) {
        const generatedUuid = uuidv4();
        localStorage.setItem(MY_UUID_KEY, generatedUuid)
        return generatedUuid
    }
    return loadedUuid
}
