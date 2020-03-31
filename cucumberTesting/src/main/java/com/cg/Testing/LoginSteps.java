package com.cg.Testing;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	WebDriver driver;
	@Before
	public void init() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", "D:/Selenium/drivers/chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("https://www.myntra.com/login?referer=https://www.myntra.com/");
		Thread.sleep(5000);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		System.out.println("StepDefinitions");
		
	    
	}


	@When("^user Enter proper \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enter_proper_and(String userName, String userPassword) throws Throwable {
	 
		WebElement element = driver.findElement(By.xpath("//input[@type='email']"));
		//element.sendKeys("avgore7@gmail.com");
		element.sendKeys(userName);
		
		WebElement element2 = driver.findElement(By.xpath("//input[@placeholder='Enter Password']"));
		//element2.sendKeys("Ashu@022");
		element2.sendKeys(userPassword);

		
		driver.findElement(By.xpath("//button[@class='login-login-button']")).click();;

	}

	@When("^User clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
	    
		Assert.assertEquals("Login", driver.getTitle());
		String url = driver.getCurrentUrl();
		System.out.println(url);
				
	}

	@Then("^User is on HomePage$")
	public void user_is_on_HomePage() throws Throwable {
		Thread.sleep(11000);
	    //driver.close();
	}

	@After
	public void quit()
	{
		driver.close();
		
	}

}
