var I=Object.defineProperty;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(n,a,t)=>a in n?I(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,i=(n,a)=>{for(var t in a||(a={}))M.call(a,t)&&v(n,t,a[t]);if(p)for(var t of p(a))P.call(a,t)&&v(n,t,a[t]);return n};import{n as b,o as R,p as g,q as D,r as x}from"./index.c67102f5.js";import{af as h,x as f}from"./vendor.3fb54e24.js";const m={name:"",startDate:"",endDate:"",setLevelId:null,hospitalId:null,supervisorIds:[]};function Q(){return b()}function E(){return x()}function S(n){return R({variables:{input:{id:n}}})}function T(){const n=g(),a=h(i({},m)),t={name:[e=>!!e||"Please enter a name for the rotation."],startDate:[e=>!!e||"Please enter a start date"],endDate:[e=>!!e||"Please enter a end date",e=>e>a.startDate||"The end date must be later then the start date."],setLevelId:[e=>!!e||"Please select a SET level"],hospitalId:[e=>!!e||"Please select a hospital"],supervisorIds:[e=>!!e.length||"Please select atleast one supervisor."]};function s(e){return n.executeMutation({input:e})}return{input:a,rules:t,createRotation:s}}function U(n){const a=D(),t=h(i({id:n},m)),s=f(),e=f(!0);R({variables:{input:{id:n}}}).then(o=>{var u,c;s.value=o.error.value,e.value=!1,Object.keys(t).forEach(r=>{var d;t[r]=(d=o.data.value)==null?void 0:d.rotation[r]}),t.setLevelId=(u=o.data.value)==null?void 0:u.rotation.setLevel.id,t.supervisorIds=(c=o.data.value)==null?void 0:c.rotation.supervisors.map(r=>r.id)});function l(o){return a.executeMutation({input:o})}return{input:t,error:s,fetching:e,updateRotation:l}}export{S as a,U as b,E as c,Q as g,T as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uMmI5ZTA3MjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcm90YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ3JlYXRlUm90YXRpb25JbnB1dCxcbiAgVXBkYXRlUm90YXRpb25JbnB1dCxcbiAgdXNlQWxsUm90YXRpb25zUXVlcnksXG4gIHVzZUNyZWF0ZVJvdGF0aW9uTXV0YXRpb24sXG4gIHVzZUN1cnJlbnRSb3RhdGlvblF1ZXJ5LFxuICB1c2VSb3RhdGlvblF1ZXJ5LFxuICB1c2VVcGRhdGVSb3RhdGlvbk11dGF0aW9uLFxufSBmcm9tIFwiQC9zZXJ2aWNlcy90eXBlcy5nZW5lcmF0ZWRcIjtcbmltcG9ydCB7IHJlYWN0aXZlLCByZWYgfSBmcm9tIFwidnVlXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ3JlYXRlUm90YXRpb25JbnB1dCA9IHtcbiAgbmFtZTogXCJcIixcbiAgc3RhcnREYXRlOiBcIlwiLFxuICBlbmREYXRlOiBcIlwiLFxuICBzZXRMZXZlbElkOiBudWxsLFxuICBob3NwaXRhbElkOiBudWxsLFxuICBzdXBlcnZpc29ySWRzOiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbnMoKSB7XG4gIHJldHVybiB1c2VBbGxSb3RhdGlvbnNRdWVyeSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFJvdGF0aW9uKCkge1xuICByZXR1cm4gdXNlQ3VycmVudFJvdGF0aW9uUXVlcnkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKGlkOiBudW1iZXIpIHtcbiAgcmV0dXJuIHVzZVJvdGF0aW9uUXVlcnkoe1xuICAgIHZhcmlhYmxlczogeyBpbnB1dDogeyBpZCB9IH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUm90YXRpb24oKSB7XG4gIGNvbnN0IGNyZWF0ZVJvdGF0aW9uTXV0YXRpb24gPSB1c2VDcmVhdGVSb3RhdGlvbk11dGF0aW9uKCk7XG5cbiAgY29uc3QgaW5wdXQgPSByZWFjdGl2ZSh7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICB9KTtcbiAgY29uc3QgcnVsZXMgPSB7XG4gICAgbmFtZTogWyh2YWw6IHN0cmluZykgPT4gISF2YWwgfHwgXCJQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB0aGUgcm90YXRpb24uXCJdLFxuICAgIHN0YXJ0RGF0ZTogWyh2YWw6IHN0cmluZykgPT4gISF2YWwgfHwgXCJQbGVhc2UgZW50ZXIgYSBzdGFydCBkYXRlXCJdLFxuICAgIGVuZERhdGU6IFtcbiAgICAgICh2YWw6IHN0cmluZykgPT4gISF2YWwgfHwgXCJQbGVhc2UgZW50ZXIgYSBlbmQgZGF0ZVwiLFxuICAgICAgKHZhbDogc3RyaW5nKSA9PlxuICAgICAgICB2YWwgPiBpbnB1dC5zdGFydERhdGUgfHxcbiAgICAgICAgXCJUaGUgZW5kIGRhdGUgbXVzdCBiZSBsYXRlciB0aGVuIHRoZSBzdGFydCBkYXRlLlwiLFxuICAgIF0sXG4gICAgc2V0TGV2ZWxJZDogWyh2YWw6IHN0cmluZykgPT4gISF2YWwgfHwgXCJQbGVhc2Ugc2VsZWN0IGEgU0VUIGxldmVsXCJdLFxuICAgIGhvc3BpdGFsSWQ6IFsodmFsOiBzdHJpbmcpID0+ICEhdmFsIHx8IFwiUGxlYXNlIHNlbGVjdCBhIGhvc3BpdGFsXCJdLFxuICAgIHN1cGVydmlzb3JJZHM6IFtcbiAgICAgICh2YWw6IG51bWJlcltdKSA9PlxuICAgICAgICAhIXZhbC5sZW5ndGggfHwgXCJQbGVhc2Ugc2VsZWN0IGF0bGVhc3Qgb25lIHN1cGVydmlzb3IuXCIsXG4gICAgXSxcbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlUm90YXRpb24oaW5wdXQ6IENyZWF0ZVJvdGF0aW9uSW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVSb3RhdGlvbk11dGF0aW9uLmV4ZWN1dGVNdXRhdGlvbih7XG4gICAgICBpbnB1dCxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB7IGlucHV0LCBydWxlcywgY3JlYXRlUm90YXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVJvdGF0aW9uKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgdXBkYXRlUm90YXRpb25NdXRhdGlvbiA9IHVzZVVwZGF0ZVJvdGF0aW9uTXV0YXRpb24oKTtcbiAgY29uc3QgaW5wdXQgPSByZWFjdGl2ZSh7XG4gICAgaWQsXG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICB9KTtcbiAgY29uc3QgZXJyb3IgPSByZWYoKTtcbiAgY29uc3QgZmV0Y2hpbmcgPSByZWYodHJ1ZSk7XG5cbiAgdXNlUm90YXRpb25RdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IGlkIH0gfSxcbiAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgZXJyb3IudmFsdWUgPSByZXN1bHQuZXJyb3IudmFsdWU7XG4gICAgZmV0Y2hpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAvLyBjaGVjayBmb3IgZXJyb3JzIGV0Y1xuICAgIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlucHV0W2tleV0gPSByZXN1bHQuZGF0YS52YWx1ZT8ucm90YXRpb25ba2V5XTtcbiAgICB9KTtcbiAgICBpbnB1dC5zZXRMZXZlbElkID0gcmVzdWx0LmRhdGEudmFsdWU/LnJvdGF0aW9uLnNldExldmVsLmlkO1xuICAgIGlucHV0LnN1cGVydmlzb3JJZHMgPSByZXN1bHQuZGF0YS52YWx1ZT8ucm90YXRpb24uc3VwZXJ2aXNvcnMubWFwKFxuICAgICAgKHN1cGVydmlzb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVydmlzb3IuaWQ7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUm90YXRpb24oaW5wdXQ6IFVwZGF0ZVJvdGF0aW9uSW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB1cGRhdGVSb3RhdGlvbk11dGF0aW9uLmV4ZWN1dGVNdXRhdGlvbih7XG4gICAgICBpbnB1dCxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5wdXQsXG4gICAgZXJyb3IsXG4gICAgZmV0Y2hpbmcsXG4gICAgdXBkYXRlUm90YXRpb24sXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhjQVdBLEtBQU0sR0FBb0MsQ0FDeEMsS0FBTSxHQUNOLFVBQVcsR0FDWCxRQUFTLEdBQ1QsV0FBWSxLQUNaLFdBQVksS0FDWixjQUFlLENBQUMsQ0FDbEIsRUFFK0IsWUFBQSxDQUM3QixNQUFPLEdBQXFCLENBQzlCLENBRWtDLFlBQUEsQ0FDaEMsTUFBTyxHQUF3QixDQUNqQyxDQUVPLFdBQXFCLEVBQVksQ0FDdEMsTUFBTyxHQUFpQixDQUN0QixVQUFXLENBQUUsTUFBTyxDQUFFLEtBQUssQ0FBQSxDQUM1QixDQUNILENBRW9DLFlBQUEsQ0FDbEMsS0FBTSxHQUF5QixJQUV6QixFQUFRLEVBQVMsS0FDbEIsRUFDSixFQUNLLEVBQVEsQ0FDWixLQUFNLENBQUMsQUFBQyxHQUFnQixDQUFDLENBQUMsR0FBTyx1Q0FBdUMsRUFDeEUsVUFBVyxDQUFDLEFBQUMsR0FBZ0IsQ0FBQyxDQUFDLEdBQU8sMkJBQTJCLEVBQ2pFLFFBQVMsQ0FDUCxBQUFDLEdBQWdCLENBQUMsQ0FBQyxHQUFPLDBCQUMxQixBQUFDLEdBQ0MsRUFBTSxFQUFNLFdBQ1osaURBQ0osRUFDQSxXQUFZLENBQUMsQUFBQyxHQUFnQixDQUFDLENBQUMsR0FBTywyQkFBMkIsRUFDbEUsV0FBWSxDQUFDLEFBQUMsR0FBZ0IsQ0FBQyxDQUFDLEdBQU8sMEJBQTBCLEVBQ2pFLGNBQWUsQ0FDYixBQUFDLEdBQ0MsQ0FBQyxDQUFDLEVBQUksUUFBVSx1Q0FDcEIsQ0FBQSxFQUVGLFdBQXdCLEVBQTRCLENBSTNDLE1BSFEsR0FBdUIsZ0JBQWdCLENBQ3BELE1BQUEsQ0FBQSxDQUNELENBRUgsQ0FDTyxNQUFBLENBQUUsUUFBTyxRQUFPLGlCQUN6QixDQUVPLFdBQTJCLEVBQVksQ0FDNUMsS0FBTSxHQUF5QixJQUN6QixFQUFRLEVBQVMsR0FDckIsTUFDRyxFQUNKLEVBQ0ssRUFBUSxJQUNSLEVBQVcsRUFBSSxFQUFJLEVBRVIsRUFBQSxDQUNmLFVBQVcsQ0FBRSxNQUFPLENBQUUsS0FBSyxDQUFBLENBQzVCLEVBQUUsS0FBSyxBQUFDLEdBQVcsU0FDWixFQUFBLE1BQVEsRUFBTyxNQUFNLE1BQzNCLEVBQVMsTUFBUSxHQUVqQixPQUFPLEtBQUssQ0FBSyxFQUFFLFFBQVEsQUFBQyxHQUFRLE9BQ2xDLEVBQU0sR0FBTyxLQUFPLEtBQUssUUFBWixjQUFtQixTQUFTLEVBQUEsQ0FDMUMsRUFDRCxFQUFNLFdBQWEsS0FBTyxLQUFLLFFBQVosY0FBbUIsU0FBUyxTQUFTLEdBQ2xELEVBQUEsY0FBZ0IsS0FBTyxLQUFLLFFBQVosY0FBbUIsU0FBUyxZQUFZLElBQzVELEFBQUMsR0FDUSxFQUFXLEdBRXRCLENBQ0QsRUFFRCxXQUF3QixFQUE0QixDQUkzQyxNQUhRLEdBQXVCLGdCQUFnQixDQUNwRCxNQUFBLENBQUEsQ0FDRCxDQUVILENBQ08sTUFBQSxDQUNMLFFBQ0EsUUFDQSxXQUNBLGdCQUFBLENBRUoifQ==
