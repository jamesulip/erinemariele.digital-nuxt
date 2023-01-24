<script lang="ts" setup></script>

<template>
  <div class="flex w-full">
    <div class="m-auto grid grid-cols-2  max-w-2xl gap-10">
      <!-- create a form for name email and message -->
     <div>

     </div>
     <form class="flex flex-col gap-5 font-['Josefin_Sans']">
        <span class=" font-['Josefin_Sans'] font-normal text-[30px]">Get in Touch</span>
        <table class="w-[500px] ">
          <tr>
            <td>
              Name
            </td>
            <td class="py-1.5">
              <input type="text" name="name" id="name" class="w-full border-2 border-gray-200 p-2" />
            </td>
          </tr>
          <tr >
            <td>
              Email
            </td>
            <td class="py-1.5">
              <input type="email" name="email" id="email" class="w-full border-2 border-gray-200 p-2" />
            </td>
          </tr>
          <tr>
            <td>
              Message
            </td>
            <td class="py-1.5">
              <textarea name="message" id="message" cols="30" rows="10"
                class="w-full border-2 border-gray-200 p-2"></textarea>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
