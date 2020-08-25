package com.college.manager;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class ManagerConfig{
    @Bean
    public WebMvcConfigurerAdapter forwardToIndex() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/").setViewName(
                        "forward:index.html");
                registry.addViewController("/favicon.ico").setViewName(
                        "forward:favicon.ico");
            }

            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                super.addResourceHandlers(registry);
                registry.addResourceHandler("/**").addResourceLocations("classpath:/webapp/");
            }

            @Override
            public void configureViewResolvers(ViewResolverRegistry registry) {
                super.configureViewResolvers(registry);
                InternalResourceViewResolver resolver = new InternalResourceViewResolver();
                resolver.setPrefix("/webapp/");
                resolver.setSuffix(".html");
                registry.viewResolver(resolver);
                InternalResourceViewResolver icoResolver = new InternalResourceViewResolver();
                resolver.setPrefix("/webapp/");
                resolver.setSuffix(".ico");
                registry.viewResolver(icoResolver);
            }
        };
    }
}
