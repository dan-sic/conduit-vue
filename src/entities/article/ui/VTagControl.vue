<template>
  <fieldset class="form-group">
    <input
      v-model="inputValue"
      type="text"
      class="form-control"
      placeholder="Enter tags"
      @keypress="onKeyPress"
    />
    <div class="tag-list">
      <span class="tag-pill" v-for="(tag, idx) in props.modelValue" :key="idx"
        ><button type="button" @click="onTagRemove(tag)">x</button> {{ tag }}
      </span>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import type { Tag } from "@/shared/api/tag";
import { ref } from "vue";

const inputValue = ref("");

const props = defineProps<{
  modelValue: Tag[];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", tags: Tag[]): void;
}>();

const onKeyPress = (e: KeyboardEvent) => {
  if (!(e.code === "Enter")) return;
  e.preventDefault();

  const newTags = Array.from(
    new Set([...props.modelValue, inputValue.value])
  ) as Tag[];

  emits("update:modelValue", newTags);

  inputValue.value = "";
};

const onTagRemove = (tag: Tag) => {
  const newTags = props.modelValue.filter((t) => t !== tag);

  emits("update:modelValue", newTags);
};
</script>

<style scoped>
.tag-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  background-color: #818a91;
  color: #fff !important;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block;
}

.tag-pill button {
  background: transparent;
  border: none;
  padding: 0;
}
</style>
