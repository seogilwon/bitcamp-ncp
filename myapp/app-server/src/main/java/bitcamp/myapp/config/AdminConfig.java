package bitcamp.myapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.FilterType;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles3.TilesView;
import bitcamp.myapp.controller.AuthController;
import bitcamp.myapp.controller.BoardController;
import bitcamp.myapp.controller.DownloadController;
import bitcamp.myapp.web.interceptor.AdminCheckInterceptor;
import bitcamp.myapp.web.interceptor.AuthInterceptor;

//@Configuration

@ComponentScan(
    value = "bitcamp.myapp.controller",
    excludeFilters = {
        @Filter(
            type = FilterType.ASSIGNABLE_TYPE,
            classes = {AuthController.class, BoardController.class, DownloadController.class})
    })
@EnableWebMvc // 프론트 컨트롤러 각각에 대해 설정해야 한다.
public class AdminConfig implements WebMvcConfigurer {

  {
    System.out.println("AdminConfig 생성됨!");
  }

  @Bean
  public ViewResolver viewResolver() {
    InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
    viewResolver.setViewClass(JstlView.class);
    viewResolver.setPrefix("/WEB-INF/jsp/");
    viewResolver.setSuffix(".jsp");
    viewResolver.setOrder(2);
    return viewResolver;
  }

  @Bean
  public ViewResolver tilesViewResolver() {
    UrlBasedViewResolver vr = new UrlBasedViewResolver();
    // Tiles 설정에 따라 템플릿을 실행할 뷰 처리기를 등록한다.
    vr.setViewClass(TilesView.class);
    // request handler가 리턴한 view name 앞에 일반 페이지임을 표시하기위해 접두사를 붙인다.
    vr.setPrefix("admin/");
    // 뷰리졸버의 우선 순위를 InternalResourceViewResolver 보다 우선하게 한다.
    vr.setOrder(1);
    return vr;
  }

  // WebMvcConfigurer 규칙에 맞춰 인터셉터를 등록한다.
  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    System.out.println("AdminConfig.addInterceptors() 호출됨!");
    registry.addInterceptor(new AuthInterceptor()).addPathPatterns("/**");
    registry.addInterceptor(new AdminCheckInterceptor()).addPathPatterns("/**");
  }
}








