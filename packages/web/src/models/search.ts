import { useSearchQuery } from "@/services/types.generated";
import { computed, Ref } from "vue";

export function getSearch(search: Ref<string>) {
  return useSearchQuery({
    variables: { input: { search: search } },
    pause: computed(() => !search.value || search.value.trim().length < 3),
  });
}
