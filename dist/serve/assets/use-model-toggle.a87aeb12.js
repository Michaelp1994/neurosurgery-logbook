import{v as T}from"./use-key-composition.9a07a52d.js";import{P as U,G as M,M as x,H as g}from"./vendor.3fb54e24.js";const A={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},j=["before-show","show","before-hide","hide"];function k({showing:l,canShow:s,hideOnRouteChange:i,handleShow:f,handleHide:d,processOnMount:h}){const n=U(),{props:o,emit:u,proxy:c}=n;let t;function y(e){l.value===!0?r(e):m(e)}function m(e){if(o.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const a=o["onUpdate:modelValue"]!==void 0;a===!0&&(u("update:modelValue",!0),t=e,g(()=>{t===e&&(t=void 0)})),(o.modelValue===null||a===!1)&&p(e)}function p(e){l.value!==!0&&(l.value=!0,u("before-show",e),f!==void 0?f(e):u("show",e))}function r(e){if(o.disable===!0)return;const a=o["onUpdate:modelValue"]!==void 0;a===!0&&(u("update:modelValue",!1),t=e,g(()=>{t===e&&(t=void 0)})),(o.modelValue===null||a===!1)&&V(e)}function V(e){l.value!==!1&&(l.value=!1,u("before-hide",e),d!==void 0?d(e):u("hide",e))}function b(e){o.disable===!0&&e===!0?o["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==l.value&&(e===!0?p:V)(t)}M(()=>o.modelValue,b),i!==void 0&&T(n)===!0&&M(()=>c.$route.fullPath,()=>{i.value===!0&&l.value===!0&&r()}),h===!0&&x(()=>{b(o.modelValue)});const v={show:m,hide:r,toggle:y};return Object.assign(c,v),v}export{j as a,k as b,A as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLW1vZGVsLXRvZ2dsZS5hODdhZWIxMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhdGNoLCBuZXh0VGljaywgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHZtSGFzUm91dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZXhwb3J0IGNvbnN0IHVzZU1vZGVsVG9nZ2xlUHJvcHMgPSB7XG4gIG1vZGVsVmFsdWU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IG51bGxcbiAgfSxcblxuICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IFsgRnVuY3Rpb24sIEFycmF5IF1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZGVsVG9nZ2xlRW1pdHMgPSBbXG4gICdiZWZvcmUtc2hvdycsICdzaG93JywgJ2JlZm9yZS1oaWRlJywgJ2hpZGUnXG5dXG5cbi8vIGhhbmRsZVNob3cvaGFuZGxlSGlkZSAtPiByZW1vdmVUaWNrKCksIHNlbGYgKCYgZW1pdCBzaG93KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICBzaG93aW5nLFxuICBjYW5TaG93LCAvLyBvcHRpb25hbFxuICBoaWRlT25Sb3V0ZUNoYW5nZSwgLy8gb3B0aW9uYWxcbiAgaGFuZGxlU2hvdywgLy8gb3B0aW9uYWxcbiAgaGFuZGxlSGlkZSwgLy8gb3B0aW9uYWxcbiAgcHJvY2Vzc09uTW91bnQgLy8gb3B0aW9uYWxcbn0pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgcGF5bG9hZFxuXG4gIGZ1bmN0aW9uIHRvZ2dsZSAoZXZ0KSB7XG4gICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGhpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNob3coZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3cgKGV2dCkge1xuICAgIGlmIChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgIHx8IChldnQgIT09IHZvaWQgMCAmJiBldnQucUFuY2hvckhhbmRsZWQgPT09IHRydWUpXG4gICAgICB8fCAoY2FuU2hvdyAhPT0gdm9pZCAwICYmIGNhblNob3coZXZ0KSAhPT0gdHJ1ZSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyID0gcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDBcblxuICAgIGlmIChsaXN0ZW5lciA9PT0gdHJ1ZSAmJiBfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICAgIHBheWxvYWQgPSBldnRcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHBheWxvYWQgPT09IGV2dCkge1xuICAgICAgICAgIHBheWxvYWQgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBsaXN0ZW5lciA9PT0gZmFsc2UgfHwgX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgICBwcm9jZXNzU2hvdyhldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Nob3cgKGV2dCkge1xuICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgZW1pdCgnYmVmb3JlLXNob3cnLCBldnQpXG5cbiAgICBpZiAoaGFuZGxlU2hvdyAhPT0gdm9pZCAwKSB7XG4gICAgICBoYW5kbGVTaG93KGV2dClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUgKGV2dCkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gfHwgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMFxuXG4gICAgaWYgKGxpc3RlbmVyID09PSB0cnVlICYmIF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICAgIHBheWxvYWQgPSBldnRcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHBheWxvYWQgPT09IGV2dCkge1xuICAgICAgICAgIHBheWxvYWQgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBsaXN0ZW5lciA9PT0gZmFsc2UgfHwgX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgICBwcm9jZXNzSGlkZShldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hpZGUgKGV2dCkge1xuICAgIGlmIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2hvd2luZy52YWx1ZSA9IGZhbHNlXG5cbiAgICBlbWl0KCdiZWZvcmUtaGlkZScsIGV2dClcblxuICAgIGlmIChoYW5kbGVIaWRlICE9PSB2b2lkIDApIHtcbiAgICAgIGhhbmRsZUhpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVtaXQoJ2hpZGUnLCBldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01vZGVsQ2hhbmdlICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSAmJiB2YWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgodmFsID09PSB0cnVlKSAhPT0gc2hvd2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgZm4gPSB2YWwgPT09IHRydWUgPyBwcm9jZXNzU2hvdyA6IHByb2Nlc3NIaWRlXG4gICAgICBmbihwYXlsb2FkKVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHByb2Nlc3NNb2RlbENoYW5nZSlcblxuICBpZiAoaGlkZU9uUm91dGVDaGFuZ2UgIT09IHZvaWQgMCAmJiB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUpIHtcbiAgICB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICAgIGlmIChoaWRlT25Sb3V0ZUNoYW5nZS52YWx1ZSA9PT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcm9jZXNzT25Nb3VudCA9PT0gdHJ1ZSAmJiBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb2Nlc3NNb2RlbENoYW5nZShwcm9wcy5tb2RlbFZhbHVlKVxuICB9KVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBjb25zdCBwdWJsaWNNZXRob2RzID0geyBzaG93LCBoaWRlLCB0b2dnbGUgfVxuICBPYmplY3QuYXNzaWduKHByb3h5LCBwdWJsaWNNZXRob2RzKVxuXG4gIHJldHVybiBwdWJsaWNNZXRob2RzXG59XG4iXSwibmFtZXMiOltdLCJt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
