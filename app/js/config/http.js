app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});
