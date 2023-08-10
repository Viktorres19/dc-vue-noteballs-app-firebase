/*here are composables*/
import {watch} from 'vue'
/*create composable watcher*/
export function useWatchCharacters(valueToWatch, maxChars = 100) {
	watch(valueToWatch, (newValue) => {
		if (newValue.length === maxChars) {
			alert(`Only ${ maxChars } characters allowed gosh darnit!`)
		}
	})
}
